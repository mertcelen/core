@extends('layouts.app')

@section('content')

<ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="{{route('home')}}">{{__("Ana Sayfa")}}</a></li>
    <li class="breadcrumb-item"><a href="/l/{{extension()->_id}}">{{extension()->name}} {{ __('Sunucuları') }}</a></li>
    <li class="breadcrumb-item"><a href="/l/{{extension()->_id}}/{{server()->city}}">{{cities(server()->city)}}</a></li>
<li class="breadcrumb-item"><a href='/l/{{extension()->_id}}/{{server()->city}}/{{server()->_id}}'>{{server()->name}}</a></li>

    <li class="breadcrumb-item active" aria-current="page">{{__("Eklenti Ayarları")}}</li>
</ol>

<button class="btn btn-primary" onclick="history.back()">{{__("Geri Dön")}}</button><br><br>
@if($extension->database)
<form action="{{route('extension_server_settings',[
                        "extension_id" => request()->route('extension_id'),
                        "server_id" => request()->route('server_id')
                    ])}}" method="POST">
        @csrf
        @foreach($extension->database as $item)
            @if($item["variable"] == "certificate")
                <h5>{{$item["name"]}}</h5>
                <textarea name="certificate" cols="30" rows="10" class="form-control"></textarea><br>
            @else
                @include('l.inputs',[
                "inputs" => [
                    $item["name"] => $item["variable"] . ":" . $item["type"]
                ]
            ])
            @endif

        @endforeach
        <button type="submit" class="btn btn-success">{{__("Kaydet")}}</button>
    </form>
@else
<br>
    <h3>{{__("Bu eklentinin hiçbir ayarı yok.")}}</h3>
@endif

@endsection