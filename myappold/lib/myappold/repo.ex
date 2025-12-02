defmodule Myappold.Repo do
  use Ecto.Repo,
    otp_app: :myappold,
    adapter: Ecto.Adapters.Postgres
end
