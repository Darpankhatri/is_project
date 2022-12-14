@extends('web.layout.master')

@section('content')
    <main>
        <section class="sec-home-banner">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        @auth
                            <a href="{{ route('dashboard') }}" class="btn btn-primary">Dashboard</a>
                        @else
                            <a href="{{ route('web.register') }}" class="btn btn-primary">Register</a>
                        @endauth
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection

@section('css')
    
@endsection

@section('js')
    
@endsection