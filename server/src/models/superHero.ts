import { Schema, model } from 'mongoose';

const superHeroSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      trim: true,
    },
    real_name: {
      type: String,
      required: true,
      trim: true,
    },
    origin_description: {
      type: String,
      required: true,
      trim: true,
    },
    superpowers: {
      type: [String],
      required: true,
    },
    catch_phrase: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (val: string[]) => val.length > 0,
        message: 'At least one image is required',
      },
    },
  },
  {
    timestamps: true,
  }
);

const SuperHero = model('SuperHero', superHeroSchema);

export default SuperHero;
