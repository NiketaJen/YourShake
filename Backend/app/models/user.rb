class User < ApplicationRecord
    has_many :carts
    has_secure_password
    validates :username, :presence => true, :uniqueness => true
    validates :first_name, :presence => true
    validates :last_name, :presence => true
    validates :email, :presence => true
    validates :password, :presence => true

end
