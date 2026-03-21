# app/models/booking.py
# This module defines the Booking model for the application, including fields for booking management.
# It uses SQLAlchemy for ORM and includes fields for user_id, room_id, check-in and check-out dates, and booking status.

from datetime import datetime

from sqlalchemy import Column, Integer, DateTime, ForeignKey, String
from app.db.database import Base

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    room_id = Column(Integer, ForeignKey("rooms.id"), nullable=False)
    check_in = Column(DateTime, nullable=False)
    check_out = Column(DateTime, nullable=False)
    status = Column(String(20), default="pending", nullable=False)  # pending, confirmed, cancelled, completed

    def __repr__(self):
        return f"<Booking(user_id={self.user_id}, room_id={self.room_id}, check_in={self.check_in}, check_out={self.check_out}, status='{self.status}')>"
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    