#api/v1/endpoints/bookings.py
from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from app.schemas.booking import BookingCreate, BookingUpdate, BookingResponse
from app.services import booking_service
from app.middleware import get_current_user

router = APIRouter(
    prefix="/bookings",
    tags=["bookings"]
)

# get all bookings for the current user
@router.get("/", response_model=List[BookingResponse])
async def get_bookings(current_user: int = Depends(get_current_user)):
    return await booking_service.get_bookings(user_id=current_user)

# get a single booking by ID
@router.get("/{booking_id}", response_model=BookingResponse)
async def get_booking(booking_id: int, current_user: int = Depends(get_current_user)):
    booking = await booking_service.get_booking(booking_id=booking_id, user_id=current_user)
    if not booking:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Booking not found")
    return booking

# create a new booking
@router.post("/", response_model=BookingResponse)
async def create_booking(booking: BookingCreate, current_user: int = Depends(get_current_user)):
    return await booking_service.create_booking(booking=booking, user_id=current_user)

# update an existing booking
@router.put("/{booking_id}", response_model=BookingResponse)
async def update_booking(booking_id: int, booking: BookingUpdate, current_user: int = Depends(get_current_user)):
    updated_booking = await booking_service.update_booking(booking_id=booking_id, booking=booking, user_id=current_user)
    if not updated_booking:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Booking not found")
    return updated_booking

# delete a booking
@router.delete("/{booking_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_booking(booking_id: int, current_user: int = Depends(get_current_user)):
    deleted = await booking_service.delete_booking(booking_id=booking_id, user_id=current_user)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Booking not found")
    return None

