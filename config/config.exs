# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :hello,
  ecto_repos: [Hello.Repo]

# Configures the endpoint
config :hello, HelloWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Uh1lwHCqcAEn8xqxNgvWnXIcIlAQgvu7FZxWZdrW6t925euxBzZSbuajd0dnv7C3",
  render_errors: [view: HelloWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Hello.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "7XfaRxr7"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :hello, Hello.Repo,
  username: "postgres",
  password: "postgres",
  database: "hello_dev",
  hostname: "localhost",
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
