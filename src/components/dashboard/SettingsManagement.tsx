
import React, { useState } from 'react';
import { Save, User, Lock, Bell, Shield, FileText, CreditCard, HelpCircle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SettingsManagement = () => {
  const { t, language, setLanguage } = useI18n();
  
  // Mock user data - in a real app, this would come from auth context or API
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+1 234 567 8901",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    language: language,
    theme: "light",
    currency: "USD",
    notifications: {
      email: true,
      push: true,
      budget: true,
      tips: true,
      marketing: false
    },
    securitySettings: {
      twoFactor: false,
      sessionTimeout: "30min"
    }
  });

  const handleSaveProfile = () => {
    // In a real app, this would call an API to update the user's profile
    console.log("Saving profile:", user);
    // Show success message
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setUser({
      ...user,
      notifications: {
        ...user.notifications,
        [key]: value
      }
    });
  };

  const handleSecurityChange = (key: string, value: any) => {
    setUser({
      ...user,
      securitySettings: {
        ...user.securitySettings,
        [key]: value
      }
    });
  };

  const handleLanguageChange = (value: any) => {
    setUser({
      ...user,
      language: value
    });
    setLanguage(value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="preferences">
            <FileText className="h-4 w-4 mr-2" />
            Preferences
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="payment">
            <CreditCard className="h-4 w-4 mr-2" />
            Payment
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and how others see you on the platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatarUrl} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={user.name} 
                        onChange={(e) => setUser({...user, name: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={user.email} 
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        value={user.phone} 
                        onChange={(e) => setUser({...user, phone: e.target.value})} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveProfile}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>App Preferences</CardTitle>
              <CardDescription>
                Customize your app experience with these settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select 
                      value={user.language} 
                      onValueChange={handleLanguageChange}
                    >
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="pl">Polish</SelectItem>
                        <SelectItem value="uk">Ukrainian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select 
                      value={user.theme} 
                      onValueChange={(value) => setUser({...user, theme: value})}
                    >
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Select Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select 
                      value={user.currency} 
                      onValueChange={(value) => setUser({...user, currency: value})}
                    >
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="GBP">GBP - British Pound</SelectItem>
                        <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                        <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                        <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                        <SelectItem value="PLN">PLN - Polish Złoty</SelectItem>
                        <SelectItem value="UAH">UAH - Ukrainian Hryvnia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select defaultValue="MM/DD/YYYY">
                      <SelectTrigger id="dateFormat">
                        <SelectValue placeholder="Select Date Format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveProfile}>
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how and when you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch 
                    checked={user.notifications.email}
                    onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications on your device
                    </p>
                  </div>
                  <Switch 
                    checked={user.notifications.push}
                    onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Budget Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you're approaching budget limits
                    </p>
                  </div>
                  <Switch 
                    checked={user.notifications.budget}
                    onCheckedChange={(checked) => handleNotificationChange('budget', checked)}
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Saving Tips</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive AI-powered saving suggestions
                    </p>
                  </div>
                  <Switch 
                    checked={user.notifications.tips}
                    onCheckedChange={(checked) => handleNotificationChange('tips', checked)}
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Marketing</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about new features and offers
                    </p>
                  </div>
                  <Switch 
                    checked={user.notifications.marketing}
                    onCheckedChange={(checked) => handleNotificationChange('marketing', checked)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveProfile}>
                <Save className="h-4 w-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Change Password</Label>
                    <p className="text-sm text-muted-foreground">
                      Update your password regularly for better security
                    </p>
                  </div>
                  <Button variant="outline">Change Password</Button>
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch 
                    checked={user.securitySettings.twoFactor}
                    onCheckedChange={(checked) => handleSecurityChange('twoFactor', checked)}
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Session Timeout</Label>
                    <p className="text-sm text-muted-foreground">
                      Set how long until your session expires
                    </p>
                  </div>
                  <Select 
                    value={user.securitySettings.sessionTimeout} 
                    onValueChange={(value) => handleSecurityChange('sessionTimeout', value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select timeout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15min">15 minutes</SelectItem>
                      <SelectItem value="30min">30 minutes</SelectItem>
                      <SelectItem value="1hour">1 hour</SelectItem>
                      <SelectItem value="6hours">6 hours</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                
                <div className="space-y-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Devices & Sessions</Label>
                    <p className="text-sm text-muted-foreground">
                      Manage devices you're logged in on
                    </p>
                  </div>
                  <div className="border rounded-md divide-y">
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Chrome on Windows</p>
                        <p className="text-sm text-muted-foreground">Last active: Today, 10:24 AM</p>
                      </div>
                      <p className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Current</p>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Safari on iPhone</p>
                        <p className="text-sm text-muted-foreground">Last active: Yesterday, 8:15 PM</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                        Log out
                      </Button>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Firefox on MacBook</p>
                        <p className="text-sm text-muted-foreground">Last active: 3 days ago</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                        Log out
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveProfile}>
                <Save className="h-4 w-4 mr-2" />
                Save Security Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Payment Tab */}
        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Manage your payment options and billing settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Subscription Plan</Label>
                    <p className="text-sm text-muted-foreground">
                      You are currently on the <span className="font-medium">Free</span> plan
                    </p>
                  </div>
                  <Button>Upgrade to Premium</Button>
                </div>
                <Separator />
                
                <div className="space-y-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Payment Methods</Label>
                    <p className="text-sm text-muted-foreground">
                      Add or remove payment methods
                    </p>
                  </div>
                  <div className="border rounded-md divide-y">
                    <div className="p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/24</p>
                        </div>
                      </div>
                      <p className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">Default</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </div>
                <Separator />
                
                <div className="space-y-2">
                  <Label className="text-base">Billing Address</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Street Address" />
                    <Input placeholder="City" />
                    <Input placeholder="State/Province" />
                    <Input placeholder="Postal Code" />
                    <Select defaultValue="US">
                      <SelectTrigger>
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="AU">Australia</SelectItem>
                        <SelectItem value="FR">France</SelectItem>
                        <SelectItem value="DE">Germany</SelectItem>
                        <SelectItem value="PL">Poland</SelectItem>
                        <SelectItem value="UA">Ukraine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveProfile}>
                <Save className="h-4 w-4 mr-2" />
                Save Payment Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsManagement;
