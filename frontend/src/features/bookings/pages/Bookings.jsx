/* ********************************************** */
/* File: src/features/bookings/pages/Bookings.jsx */
/* ********************************************** */

import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useBookings from "../hooks/useBookings";
import useBookingFilters from "../hooks/useBookingFilters";

import BookingTable from "../components/BookingTable";
import BookingCard from "../components/BookingCard";
import BookingFilters from "../components/BookingFilters";

const Bookings = () => {
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState("table");

  /*
   * Booking API/state
   */
  const {
    bookings,
    loading,
    error,
    refreshBookings,
    cancelBooking,
    checkInBooking,
    checkOutBooking,
  } = useBookings();

  /*
   * Search/filter/sort
   */
  const {
    filters,
    setFilter,
    resetFilters,
    sortedBookings,
    updateSort,
    activeFilterCount,
    hasActiveFilters,
  } = useBookingFilters(bookings);

  /*
   * Booking statistics
   */
  const statistics = useMemo(() => {
    return {
      total: bookings.length,

      pending: bookings.filter(
        (booking) => booking.status === "pending"
      ).length,

      confirmed: bookings.filter(
        (booking) => booking.status === "confirmed"
      ).length,

      checkedIn: bookings.filter(
        (booking) => booking.status === "checked_in"
      ).length,

      checkedOut: bookings.filter(
        (booking) => booking.status === "checked_out"
      ).length,

      cancelled: bookings.filter(
        (booking) => booking.status === "cancelled"
      ).length,
    };
  }, [bookings]);

  /*
   * Cancel booking
   */
  const handleCancel = async (booking) => {
    const bookingId =
      booking.id ||
      booking._id;

    const confirmed = window.confirm(
      `Are you sure you want to cancel booking ${
        booking.bookingNumber || bookingId
      }?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await cancelBooking(bookingId);
    } catch (err) {
      console.error("Cancel booking error:", err);
    }
  };

  /*
   * Check in
   */
  const handleCheckIn = async (booking) => {
    const bookingId =
      booking.id ||
      booking._id;

    try {
      await checkInBooking(bookingId);
    } catch (err) {
      console.error("Check-in error:", err);
    }
  };

  /*
   * Check out
   */
  const handleCheckOut = async (booking) => {
    const bookingId =
      booking.id ||
      booking._id;

    try {
      await checkOutBooking(bookingId);
    } catch (err) {
      console.error("Check-out error:", err);
    }
  };

  /*
   * Edit booking
   */
  const handleEdit = (booking) => {
    const bookingId =
      booking.id ||
      booking._id;

    navigate(`/bookings/${bookingId}/edit`);
  };

  /*
   * View details
   */
  const handleViewDetails = (booking) => {
    const bookingId =
      booking.id ||
      booking._id;

    navigate(`/bookings/${bookingId}`);
  };

  return (
    <div className="bookings-page">

      {/* Header */}
      <div className="bookings-header">
        <div>
          <h1>Bookings</h1>

          <p>
            Manage hotel reservations,
            check-ins and check-outs.
          </p>
        </div>

        <div className="bookings-header-actions">
          <button
            type="button"
            onClick={refreshBookings}
            disabled={loading}
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>

          <Link
            to="/bookings/create"
            className="primary-button"
          >
            + New Booking
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="booking-statistics">

        <div className="stat-card">
          <span>Total Bookings</span>
          <strong>{statistics.total}</strong>
        </div>

        <div className="stat-card">
          <span>Pending</span>
          <strong>{statistics.pending}</strong>
        </div>

        <div className="stat-card">
          <span>Confirmed</span>
          <strong>{statistics.confirmed}</strong>
        </div>

        <div className="stat-card">
          <span>Checked In</span>
          <strong>{statistics.checkedIn}</strong>
        </div>

        <div className="stat-card">
          <span>Checked Out</span>
          <strong>{statistics.checkedOut}</strong>
        </div>

        <div className="stat-card">
          <span>Cancelled</span>
          <strong>{statistics.cancelled}</strong>
        </div>

      </div>

      {/* Filters */}
      <div className="booking-filter-section">

        <BookingFilters
          filters={filters}
          setFilter={setFilter}
          resetFilters={resetFilters}
          activeFilterCount={activeFilterCount}
          hasActiveFilters={hasActiveFilters}
        />

      </div>

      {/* Toolbar */}
      <div className="booking-toolbar">

        <div className="booking-result-count">
          Showing{" "}
          <strong>
            {sortedBookings.length}
          </strong>{" "}
          of{" "}
          <strong>
            {bookings.length}
          </strong>{" "}
          bookings
        </div>

        <div className="booking-toolbar-actions">

          <button
            type="button"
            onClick={() =>
              updateSort("checkIn")
            }
          >
            Sort by Check-in
          </button>

          <button
            type="button"
            onClick={() =>
              updateSort("createdAt")
            }
          >
            Sort by Date Created
          </button>

          <button
            type="button"
            className={
              viewMode === "table"
                ? "active"
                : ""
            }
            onClick={() =>
              setViewMode("table")
            }
          >
            Table
          </button>

          <button
            type="button"
            className={
              viewMode === "card"
                ? "active"
                : ""
            }
            onClick={() =>
              setViewMode("card")
            }
          >
            Cards
          </button>

        </div>

      </div>

      {/* Error */}
      {error && (
        <div className="error-message">
          <span>{error}</span>

          <button
            type="button"
            onClick={refreshBookings}
          >
            Try Again
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && bookings.length === 0 && (
        <div className="loading-state">
          Loading bookings...
        </div>
      )}

      {/* Empty State */}
      {!loading &&
        !error &&
        sortedBookings.length === 0 && (
          <div className="empty-state">

            <h2>
              No bookings found
            </h2>

            <p>
              {hasActiveFilters
                ? "Try changing or clearing your filters."
                : "There are no bookings yet."}
            </p>

            {hasActiveFilters ? (
              <button
                type="button"
                onClick={resetFilters}
              >
                Clear Filters
              </button>
            ) : (
              <Link
                to="/bookings/create"
                className="primary-button"
              >
                Create Booking
              </Link>
            )}

          </div>
        )}

      {/* Table View */}
      {viewMode === "table" &&
        sortedBookings.length > 0 && (
          <BookingTable
            bookings={sortedBookings}
            onView={handleViewDetails}
            onEdit={handleEdit}
            onCancel={handleCancel}
            onCheckIn={handleCheckIn}
            onCheckOut={handleCheckOut}
          />
        )}

      {/* Card View */}
      {viewMode === "card" &&
        sortedBookings.length > 0 && (
          <div className="booking-card-grid">

            {sortedBookings.map((booking) => (
              <BookingCard
                key={
                  booking.id ||
                  booking._id
                }
                booking={booking}
                onView={handleViewDetails}
                onEdit={handleEdit}
                onCancel={handleCancel}
                onCheckIn={handleCheckIn}
                onCheckOut={handleCheckOut}
              />
            ))}

          </div>
        )}

    </div>
  );
};

export default Bookings;
