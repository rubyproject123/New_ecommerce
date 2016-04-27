json.array!(@productcategories) do |prodcutcategory|
  json.extract! productcategory, :id, :name
  json.url part_url(prodcutcategory, format: :json)
end