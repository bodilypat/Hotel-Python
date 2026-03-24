# -- app/crud/booking.py
# -- This connects service layer to the database (using SQLAlchemy) , includes real booking logic like availability checks.
from sqlalchemy import select, and_, or_
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.booking import Booking

# Get all bookings (with optional filters)
async def get_bookings(db: AsyncSession, user_id: int, start_date=None, end_date=None):
    query = select(Booking).where(Booking.user_id == user_id)

    if start_date and end_date:
        query = query.where(
            or_(
                and_(Booking.start_date >= start_date, Booking.start_date < end_date),
                and_(Booking.end_date > start_date, Booking.end_date <= end_date),
                and_(Booking.start_date <= start_date, Booking.end_date >= end_date)
            )
        )

    result = await db.execute(query)
    return result.scalars().all()

# Get a single booking by ID
async def get_booking(db: AsyncSession, booking_id: int, user_id: int):
    query = select(Booking).where(and_(Booking.id == booking_id, Booking.user_id == user_id))
    result = await db.execute(query)
    return result.scalar_one_or_none()

# Create a new booking
async def create_booking(db: AsyncSession, booking, user_id: int):
    new_booking = Booking(
        user_id=user_id,
        start_date=booking.start_date,
        end_date=booking.end_date,
        details=booking.details
    )
    db.add(new_booking)
    await db.commit()
    await db.refresh(new_booking)
    return new_booking

# Update an existing booking
async def update_booking(db: AsyncSession, booking_id: int, booking, user_id: int):
    existing_booking = await get_booking(db=db, booking_id=booking_id, user_id=user_id)
    if not existing_booking:
        return None

    existing_booking.start_date = booking.start_date
    existing_booking.end_date = booking.end_date
    existing_booking.details = booking.details

    db.add(existing_booking)
    await db.commit()
    await db.refresh(existing_booking)
    return existing_booking 

# Delete a booking
async def delete_booking(db: AsyncSession, booking_id: int, user_id: int):
    existing_booking = await get_booking(db=db, booking_id=booking_id, user_id=user_id)
    if not existing_booking:
        return False

    await db.delete(existing_booking)
    await db.commit()
    return True

# Check availability (CRITICAL LOGIC)
async def get_overlapping_bookings(db: AsyncSession, user_id: int, start_date, end_date, exclude_booking_id=None):
    query = select(Booking).where(
        and_(
            Booking.user_id == user_id,
            or_(
                and_(Booking.start_date >= start_date, Booking.start_date < end_date),
                and_(Booking.end_date > start_date, Booking.end_date <= end_date),
                and_(Booking.start_date <= start_date, Booking.end_date >= end_date)
            )
        )
    )

    if exclude_booking_id:
        query = query.where(Booking.id != exclude_booking_id)

    result = await db.execute(query)
    return result.scalars().all()


