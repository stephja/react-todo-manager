import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Todo Manager</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/"> <i class="fa fa-home"></i>&nbsp;Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/AddTodo"><i class="fa fa-plus"></i>&nbsp;Add Todo</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about"><i class="fa fa-question"></i>&nbsp;About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
