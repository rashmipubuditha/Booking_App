import Hotel  from "../models/Hotel.js";

export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body)

    try{
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    }
    catch(err){
        next(err);
    }
};

export const updateHotel = async(req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedHotel);
    }
    catch(err){
        next(err)
    }
};

export const deleteHotel = async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been Deleted");
    }
    catch(err){
        next(err);
    }
};

export const getHotel = async(req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }
    catch(err){
        next(err);
    }
};

export const getHotels = async(req,res,next)=>{
    // const failed = true
    
    // if (failed) return next(createError(401, "You are not authenticated!"));

    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }
    catch(err){
        next(err)
    }
};