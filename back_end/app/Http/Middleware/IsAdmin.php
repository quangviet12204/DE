<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                'message' => 'Unauthenticated'
            ], 401);
        }

        // User → Role → Role (admin / staff / customer)
        if (
            !$user->role ||
            $user->role->Role !== 'admin'
        ) {
            return response()->json([
                'message' => 'Forbidden – Admin only'
            ], 403);
        }

        return $next($request);
    }
}
