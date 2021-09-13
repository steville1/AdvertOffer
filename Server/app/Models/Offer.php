<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $fillable = [
        'product_name',
        'discount_rate',
        'advertisement_id',
    ];
    public function advert()
    {
      return $this->belongsTo(Advertisement::class,'advertisement_id');
    }
}
