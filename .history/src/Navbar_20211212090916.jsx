import React from 'react';


const  Navbar=() =>{
    return (
        <div>
           

                   <section className="Navbar_section ">
                   <nav class="navbar navbar-expand-lg bg-dark  fixed-top">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active  ">
        <a class="nav-link  activeclass"  href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link   activeclass" href="/Service">Service</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  activeclass" href="/About">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  activeclass" href="/Feature">Feature</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  activeclass" href="/Review">Review</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  activeclass" href="/Contact">Contact</a>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
                   </section>

        </div>
    )
}

export default Navbar;


