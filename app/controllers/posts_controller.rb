class PostsController < ApplicationController
  skip_before_filter :require_login, only: [:index]
  
  def hot
  end

  def create
  	@data = post_params
  	@data[:user_id] = current_user.id
  	picture = @data[:content]
  	@data[:content] = ("user_" + current_user.id.to_s + "_" + Time.now.to_s + picture.original_filename).delete(" ")
    @post = Post.new @data
    if @post.save
      File.open(Rails.root.join("public/users/" + current_user.id.to_s + "/" + @data[:content]), 'wb') do |file|
	    file.write(picture.read)
	  end
      render json: {status: 200, success: true, path: "/users/" + current_user.id.to_s + "/" + @data[:content] }
    else
      render json: {status: 400, success: false}
    end

  end

  private
	def not_authenticated
	  redirect_to login_path, alert: "Please login first"
	end

	def post_params
      params.require(:post).permit(:name, :title, :content)
    end
end
