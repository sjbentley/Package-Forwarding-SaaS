
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useLocation } from 'react-router-dom';
import { Apple, Facebook, ChromeIcon } from 'lucide-react';
import WorldMap from '@/components/WorldMap';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Logo from '@/components/Logo';

const Signup = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const isLogin = location.pathname === '/login';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Signup', 'attempted with:', { email, password, name, rememberMe });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login attempted`);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <WorldMap />
      </div>
      
      <Card className="w-full max-w-md border-white/10 bg-[#0D0F12]/80 backdrop-blur-md shadow-xl z-10">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-6">
            <Logo className="h-14 w-14" />
          </div>
          <CardTitle className="text-3xl font-bold text-gradient">
            {isLogin ? 'Welcome Back' : 'Create an Account'}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {isLogin ? 'Log in to your account to continue' : 'Enter your details to create your account'}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                  className="bg-black/20 border-white/20 text-white focus:border-deutscher-purple-light"
                  placeholder="Enter your name"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/20 border-white/20 text-white focus:border-deutscher-purple-light"
                placeholder="name@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-gray-300">Password</Label>
                {isLogin && (
                  <Button 
                    variant="link" 
                    className="px-0 font-normal text-xs text-deutscher-purple-light hover:text-deutscher-purple"
                  >
                    Forgot password?
                  </Button>
                )}
              </div>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-black/20 border-white/20 text-white focus:border-deutscher-purple-light"
                placeholder="••••••••"
              />
            </div>
            
            {isLogin && (
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
                  className="data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light text-white"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </Button>
          </form>
          
          <div className="relative flex items-center justify-center my-6">
            <div className="h-px w-full bg-white/20"></div>
            <p className="absolute bg-[#0D0F12] px-4 text-xs text-gray-400">OR CONTINUE WITH</p>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <Button 
              type="button" 
              variant="outline" 
              className="border-white/20 hover:bg-white/10"
              onClick={() => handleSocialLogin('Google')}
            >
              <ChromeIcon className="h-5 w-5" />
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="border-white/20 hover:bg-white/10"
              onClick={() => handleSocialLogin('Apple')}
            >
              <Apple className="h-5 w-5" />
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="border-white/20 hover:bg-white/10"
              onClick={() => handleSocialLogin('Facebook')}
            >
              <Facebook className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col justify-center border-t border-white/10 pt-4">
          <p className="text-sm text-gray-300">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link 
              to={isLogin ? "/signup" : "/login"} 
              className="text-deutscher-purple-light hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </Link>
          </p>
        </CardFooter>
      </Card>

      <p className="absolute bottom-4 text-xs text-gray-500 w-full text-center">
        © {new Date().getFullYear()} PakSend. All rights reserved.
      </p>
    </div>
  );
};

export default Signup;

