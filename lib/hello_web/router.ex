defmodule HelloWeb.Router do
  use HelloWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", HelloWeb do
    pipe_through :browser
    # pipe_through [:authenticate_user, :ensure_admin]

    # get "/", PageController, :index
    get "/*path", PageController, :index
    # get "/hello", HelloController, :index

    # get "/hello/:messenger", HelloController, :show
    # resources "/reviews", ReviewController

    # resources "/users", UserController
    # resources "/posts", PostController, only: [:index, :show]
    # resources "/comments", CommentController, except: [:delete]
    # forward "/jobs", BackgroundJob.Plug
  end

  # Other scopes may use custom stacks.
  # scope "/api", HelloWeb do
  #   pipe_through :api
  # end
  # scope "/admin" do
  #   pipe_through :browser
  #
  #   resources "/reviews", HelloWeb.Admin.ReviewController
  # end
end
