class Song < ActiveRecord::Base
	mount_uploader :cover_image, CoverImageUploader
end
