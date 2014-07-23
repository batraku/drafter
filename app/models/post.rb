class Post < ActiveRecord::Base

  validates :name, length: { minimum: 3 }
  validates :name, uniqueness: true
  validates :content, length: { minimum: 0 }
  validates :content, presence: true

  belongs_to :user
end
