#app/models/customer.py
# This module defines the Customer model for the application, including fields for customer management.
# It uses SQLAlchemy for ORM and includes fields for name, email, phone number, and address.

from datetime import datetime
from xmlrpc.client import DateTime

from sqlalchemy import Column, Integer, String
from app.db.database import Base

class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    phone_number = Column(String(20), nullable=True)
    address = Column(String(255), nullable=True)

    def __repr__(self):
        return f"<Customer(name='{self.name}', email='{self.email}', phone_number='{self.phone_number}', address='{self.address}')>"
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
