class AddCompanynameToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :companyname, :string
  end
end
