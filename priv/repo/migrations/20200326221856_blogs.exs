defmodule Hello.Repo.Migrations.Blogs do
  use Ecto.Migration

  def change do
    create table(:blogs, primary_key: false) do
      add :id, :id, primary_key: true
      add :title, :string
      add :subtitle, :string
      add :image, :string
      add :link, :string
      add :author, :string
      timestamps()
    end
  end
end
