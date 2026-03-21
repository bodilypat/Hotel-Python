# app/models/room.py
# This module defines the Room model for the application, including fields for room management.
# It uses SQLAlchemy for ORM and includes fields for room number, type, availability, and pricing.

from datetime import datetime

from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from app.db.database import Base

class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)
    room_number = Column(String(10), unique=True, nullable=False)
    room_type_id = Column(Integer, ForeignKey("room_types.id"), nullable=False)
    floor = Column(Integer, nullable=True)
    status = Column(String(20), default="available", nullable=False)  # available, occupied, maintenance, reserved
    is_clean = Column(Boolean, default=True)
    is_available = Column(Boolean, default=True)
    base_price = Column(Float, nullable=False)

    def __repr__(self):
        return f"<Room(room_number='{self.room_number}', room_type_id={self.room_type_id}, floor={self.floor}, status='{self.status}', is_clean={self.is_clean}, is_available={self.is_available}, base_price={self.base_price})>"
