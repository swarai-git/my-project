// backend/models/Pet.js
import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  species: {
    type: String,
    required: true,
    enum: ['Dog', 'Cat', 'Bird', 'Rabbit', 'Other']
  },
  breed: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  size: {
    type: String,
    enum: ['Small', 'Medium', 'Large'],
    required: true
  },
  weight: String,
  color: String,
  image: String,
  
  // Owner Information
  owner: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  
  // Medical Information
  vaccinations: [{
    name: String,
    date: Date,
    nextDue: Date,
    veterinarian: String
  }],
  medications: [{
    name: String,
    dosage: String,
    frequency: String,
    startDate: Date,
    endDate: Date
  }],
  medicalHistory: [{
    date: Date,
    diagnosis: String,
    treatment: String,
    veterinarian: String,
    notes: String
  }],
  
  // Appointments
  appointments: [{
    date: String,
    time: String,
    type: String,
    veterinarian: String,
    notes: String,
    status: {
      type: String,
      enum: ['Scheduled', 'Completed', 'Cancelled'],
      default: 'Scheduled'
    }
  }],

  // Adoption-specific fields
  availableForAdoption: {
    type: Boolean,
    default: false
  },
  adoptionFee: {
    type: Number,
    default: 0
  },
  adoptionStatus: {
    type: String,
    enum: ['available', 'pending', 'adopted'],
    default: 'available'
  },
  location: {
    type: String,
    default: 'Shelter'
  },
  description: {
    type: String,
    default: ''
  },
  goodWith: [{
    type: String,
    enum: ['Kids', 'Dogs', 'Cats', 'Other Pets']
  }],
  specialNeeds: {
    type: String,
    default: 'None'
  },
  energyLevel: {
    type: String,
    enum: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
    default: 'Medium'
  },
  trainingLevel: {
    type: String,
    enum: ['None', 'Basic', 'Intermediate', 'Advanced', 'Professional'],
    default: 'None'
  },
  featured: {
    type: Boolean,
    default: false
  },
  vaccinated: {
    type: Boolean,
    default: false
  },
  neutered: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Pet', petSchema);