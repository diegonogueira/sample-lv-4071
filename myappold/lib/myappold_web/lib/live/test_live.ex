defmodule MyappoldWeb.TestLive do
  use MyappoldWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    socket = assign(socket, :test, "")
    {:ok, socket}
  end

  @impl true
  def handle_event("validate", %{"test" => params}, socket) do
    socket = assign(socket, :test, params["title"])
    {:noreply, socket}
  end

  @impl true
  def handle_event("save", %{"test" => _params}, socket) do
    {:noreply, socket}
  end
end
