class Api::StoriesController < ApplicationController
  before_action :require_sign_in

  def create
    @story = current_user.workflows.find(params[:workflow_id]).stories.build(story_params)
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def update
    @story = current_user.stories.find(params[:id])
    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @story = current_user.stories.find(params[:id]).destroy
  end

  private

  def story_params
    params.require(:story).permit(
      :description, :kind, :order, :points, :status, :title, :workflow
    )
  end
end
