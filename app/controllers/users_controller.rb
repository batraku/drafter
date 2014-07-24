class UsersController < ApplicationController
  
  def new
   @user = User.new
  end

  def create
  	@user = User.new(user_params)
	  if @user.save
      make_user_dir(@user.id)
	    redirect_to(root_url, notice: 'User was successfully created')
	  else
	    render :new
	  end
  end

  def make_user_dir(id)
    users_root =  Rails.root.join("public/users/")
    Dir.mkdir(users_root + id.to_s)
    #FileUtils.cp_r(dir_path + 'default_avatar.png', dir_path + path)
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
