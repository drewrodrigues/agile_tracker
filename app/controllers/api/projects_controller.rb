class Api::ProjectsController < ApplicationController
  before_action :require_sign_in

  def show
    @project = current_user.projects.includes(:workflows, :stories).find(params[:id])
  end
  
  def create
    @project = current_user.projects.build(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @project = current_user.projects.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @projects = current_user.projects
  end

  def destroy
    current_user.projects.find(params[:id]).destroy
  end

  private

  def project_params
    params.require(:project).permit(:title)
  end
end
