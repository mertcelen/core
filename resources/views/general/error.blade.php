@extends('layouts.app')

@section('content')
    <h1>
        @isset($message)
            {{$message}}
        @endisset
    </h1>
    <h3>
        3 Saniye içinde geri yönlendirileceksiniz...
    </h3>
    <script>
        setTimeout(function () {
            history.back();
        },3000);
    </script>
@endsection