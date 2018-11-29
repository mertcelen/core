<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ __("Liman Sistem Yönetimi") }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/fa.min.css') }}">

    <style>
        .sidebar {
            color: #FFF;
            background: #2b2b2d;
            width: 320px;
            max-width: 400px;
            height: 100%;
            float: left;
            position: fixed;
            z-index: 1000;
            display: block;
            -webkit-transition: margin 0.7s;
            transition: margin 0.7s;
            flex:1;
        }
        #navbar-toggle {
            cursor: pointer;
        }
        #toggleView {
            margin-left: 44px;
        }
        .menu-icon {
            float: right;
        }
        .sidebar-nav {
            display: block;
            float: left;
            width: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .sidebar-nav li a {
            padding-left: 20px;
            font-size: 16px;
            text-decoration: none;
            color: #FFF;
            float: left;
            text-decoration: none;
            width: 100%;
            height: 50px;
            line-height: 15px;
            padding: 20px;
            vertical-align: center;
        }
        .sidebar-nav li a:hover {
            background:#121213;
            -webkit-transition: background 0.1s;
            transition: background 0.1s;
        }
    </style>
</head>
<body>
@auth
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">

        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{{ __("Liman Sistem Yönetimi") }}</a>
        <input class="form-control form-control-dark w-100" type="text" placeholder="{{ __("Arama") }}" aria-label="{{ __("Arama") }}">
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link text-white" href="#">{{ __("Çıkış Yap") }}</a>
            </li>
        </ul>

    </nav>
@endauth

    <div class="container-fluid">
        <div class="row">
            @auth
                <div class="sidebar">

                    <ul class="sidebar-nav">

                        <li>
                            <a href="{{route('home')}}">Ana Sayfa <i class="fa fa-home menu-icon fa-2x" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="{{route('servers')}}">Sunucular<i class="fa fa-download menu-icon fa-2x" aria-hidden="true"></i></a>
                        </li>
                        @foreach($extensions as $extension)
                        <li>
                            <a href="/l/{{$extension->name}}">{{$extension->name}}<i class="fa fa-cog menu-icon fa-2x" aria-hidden="true"></i></a>
                        </li>
                        @endforeach
                        <li>
                            <a href="{{route('scripts')}}">Betikler<i class="fa fa-sign-out menu-icon fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="{{route('keys')}}">SSH Anahtarları<i class="fa fa-sign-out menu-icon fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="{{route('extensions_settings')}}">Eklentiler<i class="fa fa-sign-out menu-icon fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="{{route('users')}}">Liman Kullanıcıları<i class="fa fa-sign-out menu-icon fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="{{route('settings')}}">Sistem Ayarları<i class="fa fa-sign-out menu-icon fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a id="navbar-toggle"><i class="fa fa-bars menu-icon fa-2x" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            @endauth
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <br>
                @yield('content')
            </main>
        </div>
    </div>
    @auth
        <script>
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            function clickme(){
                $(this).toggleClass('active');
                $('.sidebar').animate({width: 'toggle'}, 200);

            }
            var state = "expanded";
            $('#navbar-toggle').click(function() {
                if (state == "expanded") {
                    $('.sidebar').css('margin-left', '-250px');
                    state = "minimized";
                } else {
                    if (state == "minimized") {
                        $('.sidebar').css('margin-left', '0px');
                        state = "expanded";
                    }
                }
            })
        </script>
    @endauth
</body>
</html>
