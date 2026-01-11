-- Fix overly permissive RLS policy for newsletter subscribers
-- Drop the existing policy and create a more restrictive one
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;

-- Allow inserts only for new subscriptions (unauthenticated users can still subscribe)
-- But we add a simple check to prevent abuse
CREATE POLICY "Newsletter subscription allowed" ON public.newsletter_subscribers 
  FOR INSERT 
  WITH CHECK (email IS NOT NULL AND email ~ '^[^@]+@[^@]+\.[^@]+$');