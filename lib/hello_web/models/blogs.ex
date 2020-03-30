defmodule HelloWeb.Blogs do
  use HelloWeb, :model

  schema "blogs" do
    field :title, :string
    field :subtitle, :string
    field :image, :string
    field :link, :string
    field :author, :string
    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :subtitle, :image, :link, :author])
  end
end
