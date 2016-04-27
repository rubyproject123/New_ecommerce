json.array!(@testimonials) do |testimonial|
  json.extract! testimonial, :id, :name, :designation, :image, :descrition
  json.url testimonial_url(testimonial, format: :json)
end
