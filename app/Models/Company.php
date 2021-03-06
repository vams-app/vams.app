<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use App\Models\World;
use App\Models\Employee;
use App\Models\OnAirRefresh;

class Company extends BaseByModel
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'world_id',
        'name',
        'onair_name',
        'airline',
        'last_connected',
        'last_report_date',
        'reputation',
        'creation_date',
        'difficulty_level',
        'level',
        'xp',
        'transport_employee_instant',
        'transport_player_instant',
        'force_time_in_simulator',
        'use_small_airports',
        'use_only_vanilla_airports',
        'enable_skill_tree',
        'checkride_level',
        'enable_landing_penalities',
        'enable_employees_flight_duty_and_sleep',
        'aircraft_rent_level',
        'enable_cargos_and_charters_loading_time',
        'in_survival',
        'pay_bonus_factor',
        'enable_sim_failures',
        'disable_seats_config_check',
        'realistic_sim_procedures',
        'sync_company',
        'sync_employees',
        'sync_fbos',
        'sync_fleet',
        'sync_flights',
        'api_key',
        'world_id',
        'owner_id',
        'updated_by',
        'created_by',
    ];

    public function world()
    {
        return $this->belongsTo(World::class, 'world_id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id', 'id');
    }

    public function refreshes()
    {
        return $this->hasMany(OnAirRefresh::class, 'company_id', 'id');
    }

    public function employees()
    {
        return $this->hasMany(Employee::class, 'company_id', 'id');
    }
}
