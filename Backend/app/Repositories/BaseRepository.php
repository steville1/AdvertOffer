<?php
namespace App\Repositories;
use App\Common\Advertisements;
use App\Interfaces\IRepository;

class BaseRepository implements IRepository
{
    protected $model;

    public function __construct(string $model)
    {
        $this->model = "App\\Common\\$model";
    }

    public function findOrFail($id)
    {
        return $this->model::findOrfail($id);
    }
}
?>
