import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowLeft, X } from 'lucide-react';

export default function AddProperty() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: 'house',
    description: '',
    address: '',
    city: 'Tagbilaran City',
    price: '',
    bedrooms: '1',
    bathrooms: '1',
    amenities: [] as string[],
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const amenitiesList = [
    'WiFi',
    'Parking',
    'Air Conditioning',
    'Kitchen',
    'TV',
    'Washing Machine',
    'Pool',
    'Gym',
    'Security',
    'Garden',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would upload to a server
    alert('Property added successfully!');
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleAmenity = (amenity: string) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.includes(amenity)
        ? formData.amenities.filter(a => a !== amenity)
        : [...formData.amenities, amenity]
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Simulated image upload
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setUploadedImages([...uploadedImages, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-[#636e72] hover:text-[#2d3436] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-[32px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-2">
          Add New Property
        </h1>
        <p className="text-[16px] font-['Poppins:Regular',sans-serif] text-[#636e72] mb-8">
          List your property on BOHOL Board
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-[15px] p-6 shadow-sm">
            <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-6">
              Basic Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436] block mb-2">
                  Property Name *
                </label>
                <input
                  type="text"
                  name="propertyName"
                  value={formData.propertyName}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Beachfront Villa in Panglao"
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>

              <div>
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436] block mb-2">
                  Property Type *
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                >
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="resort">Resort</option>
                  <option value="condo">Condominium</option>
                  <option value="villa">Villa</option>
                </select>
              </div>

              <div>
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436] block mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe your property, its features, and what makes it special..."
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-[15px] p-6 shadow-sm">
            <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-6">
              Location
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436] block mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street name and number"
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>

              <div>
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436] block mb-2">
                  City/Municipality *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                >
                  <option value="Tagbilaran City">Tagbilaran City</option>
                  <option value="Panglao">Panglao</option>
                  <option value="Dauis">Dauis</option>
                  <option value="Baclayon">Baclayon</option>
                  <option value="Loboc">Loboc</option>
                  <option value="Carmen">Carmen</option>
                  <option value="Anda">Anda</option>
                </select>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-white rounded-[15px] p-6 shadow-sm">
            <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-6">
              Property Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436] block mb-2">
                  Price per Night (₱) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="2500"
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>

              <div>
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436] block mb-2">
                  Bedrooms *
                </label>
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436] block mb-2">
                  Bathrooms *
                </label>
                <select
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-[15px] p-6 shadow-sm">
            <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-6">
              Amenities
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className={`flex items-center gap-2 p-3 border-2 rounded-[10px] cursor-pointer transition-colors ${
                    formData.amenities.includes(amenity)
                      ? 'border-[#219653] bg-[#219653]/5'
                      : 'border-[#dfe6e9] hover:border-[#219653]/30'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="w-4 h-4 text-[#219653] border-[#dfe6e9] rounded focus:ring-[#219653]"
                  />
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#2d3436]">
                    {amenity}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div className="bg-white rounded-[15px] p-6 shadow-sm">
            <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-6">
              Property Photos
            </h2>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-[#dfe6e9] rounded-[10px] p-8 text-center">
                <Upload className="w-12 h-12 text-[#636e72] mx-auto mb-3" />
                <label className="cursor-pointer">
                  <span className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#219653]">
                    Click to upload
                  </span>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    {' '}or drag and drop
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72] mt-2">
                  PNG, JPG up to 10MB
                </p>
              </div>

              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-[10px]"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 bg-white hover:bg-[#f8f9fa] text-[#636e72] border-2 border-[#dfe6e9] py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#219653] hover:bg-[#1a7741] text-white py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] shadow-sm transition-colors"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
