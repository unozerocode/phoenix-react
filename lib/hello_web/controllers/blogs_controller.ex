defmodule HelloWeb.BlogsController do
  use HelloWeb, :controller
  alias HelloWeb.Blogs
  alias Hello.Repo

  def index(conn, _params) do
    blogs = Repo.all(Blogs)
    render(conn, "index.json", blogs: blogs)
  end

  def create(conn, %{"blogs" => blogs_params}) do
    changeset = Blogs.changeset(%Blogs{}, blogs_params)

    case Repo.insert(changeset) do
      {:ok, _blogs} ->
        blogs = Repo.all(Blogs)
        render(conn, "index.json", blogs: blogs)
    end
  end

  def show(conn, %{"id" => id}) do
    blog = Repo.get(Blogs, id)
    render(conn, "show.json", blog: blog)
  end
end
