<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServerKey extends Model
{
    use UsesUuid;

    protected $fillable = ['type', 'data', 'server_id', 'user_id'];
}
