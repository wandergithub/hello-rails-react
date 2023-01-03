class MessageController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: rand_message }
    end
  end

  private

  def rand_message
    messages = Message.all
    messages.sample
  end
end
