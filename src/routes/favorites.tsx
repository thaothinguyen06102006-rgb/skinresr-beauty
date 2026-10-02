import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/favorites")({ component: () => <Navigate to="/shop" /> });