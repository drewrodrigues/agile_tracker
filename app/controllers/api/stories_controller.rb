class Api::StoriesController < ApplicationController
  before_action :require_sign_in
  before_action :set_story, except: :create

  def create
    @story = current_user.workflows.find(params[:workflow_id]).stories.build(story_params)
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def update
    # TODO: pull route for changing position out
    if @story.update(story_params)
      @stories = @story.workflow.stories
      render :index
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @story.destroy
  end

  def next
    if @story.next_status_and_workflow
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  def accept
    if @story.accept
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  def reject
    if @story.reject
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def story_params
    params.require(:story).permit(
      :description, :kind, :position, :points, :status, :title, :workflow_id
    )
  end

  def set_story
    @story = current_user.stories.find(params[:id])
  end
end
