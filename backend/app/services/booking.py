# -- models/booking.py
# -- This defines the Booking model using SQLAlchemy, representing the bookings table in the database.

from sqlalchemy import Column, Integer, Date, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Booking(Base):
    __tablename__ = "bookings"

    booking_id = Column(Integer, primary_key=True, index=True)
    guest_id = Column(Integer, ForeignKey("guests.guest_id", ondelete="CASCADE"), nullable=False)
    room_id = Column(Integer, ForeignKey("rooms.room_id", ondelete="CASCADE"), nullable=False)
    check_in_date = Column(Date, nullable=False)
    check_out_date = Column(Date, nullable=False)
    status = Column(String(20), nullable=False, default='reserved')
    created_at = Column(String, nullable=False)
    
    # Relationships
    guest = relationship("Guest", back_populates="bookings")
    room = relationship("Room", back_populates="bookings")

