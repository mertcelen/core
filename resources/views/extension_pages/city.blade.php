@extends('layouts.app')

@section('content')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('home')}}">{{__("Ana Sayfa")}}</a></li>
            <li class="breadcrumb-item"><a href="/l/{{extension()->id}}">{{__(extension()->name)}} {{ __('Sunucuları') }}</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{cities(request('city'))}}</li>
        </ol>
    </nav>

    @include('l.table',[
        "value" => extension()->servers(request('city')),
        "title" => [
            "Sunucu Adı" , "İp Adresi" , "Sunucu Tipi" , "Kontrol Portu", "*hidden*" ,"*hidden*"
        ],
        "display" => [
            "name" , "ip_address", "type" , "control_port", "city:city", "id:server_id"
        ],
        "onclick" => "details"
    ])

    <script>
        function details(element) {
            let server_id = element.querySelector('#server_id').innerHTML;
            window.location.href = window.location.href + "/" + server_id
        }
    </script>
@endsection