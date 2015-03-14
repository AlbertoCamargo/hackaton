class MatchsController < ApplicationController
  def index
    @word = Word.all.sample
    #render json: @word
  end

  def show
  end 

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
