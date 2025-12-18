
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import Service from './models/serviceModel.js';

const seedServices = [
    {
        title: 'Basic Photo Package',
        description: 'Includes 2 hours of coverage and 50 edited photos.',
        price: '5000',
        tags: ['photo', 'basic'],
        category: 'photography',
    },
    {
        title: 'Standard Photo Package',
        description: 'Includes 4 hours of coverage and 100 edited photos.',
        price: '10000',
        tags: ['photo', 'standard'],
        category: 'photography',
    },
    {
        title: 'Premium Photo Package',
        description: 'Includes 8 hours of coverage, 200 edited photos, and a photo album.',
        price: '20000',
        tags: ['photo', 'premium'],
        category: 'photography',
    },
    {
        title: 'Basic Video Package',
        description: 'Includes 2 hours of coverage and a 3-5 minute highlight reel.',
        price: '8000',
        tags: ['video', 'basic'],
        category: 'videography',
    },
    {
        title: 'Standard Video Package',
        description: 'Includes 4 hours of coverage and a 5-7 minute highlight reel.',
        price: '15000',
        tags: ['video', 'standard'],
        category: 'videography',
    },
    {
        title: 'Premium Video Package',
        description: 'Includes 8 hours of coverage, a 10-12 minute highlight reel, and drone footage.',
        price: '25000',
        tags: ['video', 'premium'],
        category: 'videography',
    },
    {
        title: 'Event Photography',
        description: 'Coverage for corporate events, parties, and other special occasions.',
        price: '12000',
        tags: ['event', 'photo'],
        category: 'photography',
    },
    {
        title: 'Product Photography',
        description: 'High-quality photos of your products for e-commerce or marketing.',
        price: '9000',
        tags: ['product', 'photo'],
        category: 'photography',
    },
    {
        title: 'Music Video',
        description: 'Full production of a music video, from concept to final edit.',
        price: '30000',
        tags: ['music', 'video'],
        category: 'videography',
    },
    {
        title: 'Real Estate Videography',
        description: 'Showcase your property with a stunning video tour.',
        price: '18000',
        tags: ['real estate', 'video'],
        category: 'videography',
    },
    {
        title: 'Portrait Session',
        description: 'A one-hour session for individual or family portraits.',
        price: '4000',
        tags: ['portrait', 'photo'],
        category: 'photography',
    },
    {
        title: 'Short Film',
        description: 'Full production of a short film, from script to final cut.',
        price: '50000',
        tags: ['film', 'video'],
        category: 'videography',
    },
    {
        title: 'Wedding Highlights',
        description: 'A cinematic highlight reel of your special day.',
        price: '22000',
        tags: ['wedding', 'video'],
        category: 'videography',
    },
    {
        title: 'Family Photoshoot',
        description: 'A fun and relaxed photoshoot for the whole family.',
        price: '6000',
        tags: ['family', 'photo'],
        category: 'photography',
    },
];

const seedDB = async () => {
    await connectDB();
    try {
        await Service.deleteMany({});
        console.log('Services cleared');
        await Service.insertMany(seedServices);
        console.log('Services seeded');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();
