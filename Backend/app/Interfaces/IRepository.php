<?php

namespace App\Interfaces;

interface IRepository
{
    public function findOrFail($id);
}

?>
