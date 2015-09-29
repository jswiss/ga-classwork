class Location < ActiveRecord::Base
	mount_uploader :graffiti_image, GraffitiImageUploader #GIU is uploader class
	#now the GraffitiImage class has access to all the methods in graffiti_image_uploader.rb
end
