const mongoose = require('mongoose');

// Comment Schema
const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

// Blog Post Schema
const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 50,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      default: 'General',
      enum: ['Technology', 'Health', 'Education', 'Lifestyle', 'Finance', 'General'],
    },
    likes: {
      type: [String], // Stores usernames of users who liked the post
      default: [],
    },
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  {
    timestamps: true, // Auto-generates createdAt and updatedAt
  }
);

module.exports = mongoose.model('BlogPost', blogPostSchema);