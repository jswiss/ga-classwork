class AddCoverImageToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :cover_image, :string
  end
end
