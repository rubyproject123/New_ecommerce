json.array!(@brandnames) do |brandname|
  json.extract! brandname, :id, :name
  json.url part_url(brandname, format: :json)
end