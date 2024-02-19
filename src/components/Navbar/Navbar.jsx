import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav>
        <div className='linkContainer'>
          <div className='linkDiv'>
            <NavLink to="/">home</NavLink>
          </div>
          .
          <div className='linkDiv'>
            <NavLink to="/about">about</NavLink>
          </div>
          .
          <div className='linkDiv'>
            <NavLink to="/projects">projects</NavLink>
          </div>
          .
          <div className='linkDiv'>
            <a href='https://personalprofessionaldevelopment.s3.us-west-1.amazonaws.com/kkoresume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDlwGjNpMEgR7MHvslFWb8tGQAH12plHHKhkTUVkTT6JwIgaRG0FAMTANWvJTLpK8zDk1obkH4tUpfwfiDGwlAOUhUq7QII%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5MDU0MTgxMjUwMzkiDIbQkkFOm9P2Vthe9CrBAgvEzM%2F5ETachplBn6nzLhV8QiCPU4fOx4oxXb4gzNjoUhWgTdEgHN8akIaXYM79gTJYtXbNCrSkKUhWDOdFGDiVJRJFv6qK8qx4zDt%2BxrbWRggi4C7A09YBjAepBHb3t3%2B1YpEXNHie4xI2y%2FEPgiMuS0doYjLHazV3QX9Q%2BxS6XSV18fTLkUi9CQzwZS8j9bFOiPlpmNuaKFF4b4kI3Kmr86kERsPcPyy2teiI0ntmjAYAG2NTwNFTQawleq1x3xCI8eKcTbv6eNDlyLVLMiEitAWb52yRIFzh9xdYa78e%2Fwykd4fAxXpugel%2Fund5POW4DzS63brR3Ntz03vHzpagVWt7tb8Ltazufm4yrQfNmfmnc6IXkqsskEphtD9aSBZwHdmyviv0XxFvK4dqV852AVVYuV5w%2F2qCVCu58a6XHDC4g8uuBjqzApMhWLz4qbNRKFWkA2iJzm89sSKjS9qmF%2FvXN7F9a4qPl%2BmwK8wNtU37KeShYZucEdj6UbkNc4rVo2zwD0uTdNnkU8OWyybtJ6GVnORvqEkxSS9AOGEzfadbms31dbYzzrKDlclgJYDxtIh5p4lgELVOt6EsQAYUFKU26zbjIuZh2xYcngMfIHxvi0yMwHwGTCnNfqsS1ZvIrdjV0o2kOjMdn21dN3vTAMfoX7LaRnyOLyhR6kIWhEiGCek0Yqu7MEt2JWsXB8Pl8ahAcqX2pndSTC4z%2BUl0oDLg%2B0RrAPtvPsCyY3sC7vDOIcgvAwZlWjrW%2Ffl7bfEde3%2FvrOTPU%2FGw4N8OyBbIx7jiCOd00tM0wnbAyzg5EwBWtc94tJYeaPqYn%2B99pLZ2wMrOlfnlXfCULOQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240219T025240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5FTZAF3XRYXKNMBQ%2F20240219%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6a7860aadc1eafd071a2107290cdbcc57d000e13c7ceb3737f960e72bf6d3a08' target='_blank'>resume</a>
          </div>
          .
          <div className='linkDiv'>
            <NavLink to="/contact">contact</NavLink>
          </div>
        </div>
    </nav>
  )
}

export default Navbar