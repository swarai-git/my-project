// backend/models/Adoption.js
import mongoose from 'mongoose';

const adoptionApplicationSchema = new mongoose.Schema({
  // Application Information
  applicationId: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['pending', 'under_review', 'approved', 'rejected', 'completed'],
    default: 'pending'
  },
  
  // Pet Information
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },
  petName: {
    type: String,
    required: true
  },
  petSpecies: {
    type: String,
    required: true
  },
  petBreed: {
    type: String,
    required: true
  },
  
  // Applicant Personal Information
  applicant: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true }
  },
  
  // Housing Information
  housing: {
    type: { type: String, required: true },
    ownership: { type: String, required: true },
    landlordPhone: { type: String },
    yardAccess: { type: String, required: true },
    yardFenced: { type: String }
  },
  
  // Family Information
  family: {
    householdMembers: { type: String, required: true },
    childrenAges: { type: String },
    experienceWithPets: { type: String, required: true },
    currentPets: { type: String, required: true }
  },
  
  // Pet Care Plans
  carePlans: {
    hoursAlone: { type: String, required: true },
    sleepingArrangements: { type: String, required: true },
    exercisePlans: { type: String, required: true },
    financialPreparedness: { type: String, required: true },
    veterinaryClinic: { type: String, required: true }
  },
  
  // References
  references: [{
    name: { type: String, required: true },
    phone: { type: String, required: true },
    relationship: { type: String, required: true }
  }],
  
  // Agreement
  agreement: {
    accepted: { type: Boolean, required: true },
    acceptedAt: { type: Date }
  },
  
  // Timestamps
  submittedAt: {
    type: Date,
    default: Date.now
  },
  
  // Review Information
  reviewNotes: String,
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  reviewedAt: Date
}, {
  timestamps: true
});

// Generate application ID before saving
adoptionApplicationSchema.pre('save', function(next) {
  if (!this.applicationId) {
    this.applicationId = `APP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
  }
  next();
});

export default mongoose.model('Adoption', adoptionApplicationSchema);